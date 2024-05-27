import { useState, useEffect } from "react";
import apiClient from "../services/api.client";
import { CanceledError } from "axios";

interface Ability {
  displayIcon: string;
  displayName: string;
  slot: string;
  description: string;
}

interface Role {
  uuid: string;
  displayName: string;
  displayIcon: string;
}

interface Agents {
  uuid: string;
  displayName: string;
  background: string;
  fullPortrait: string;
  abilities: Ability[];
  role: Role;
}

interface FetchAgentsResponse {
  count: number;
  data: Agents[];
}

const useAgents = (classe: string) => {
  const [agents, setAgents] = useState<Agents[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchAgentsResponse>("/agents", { signal: controller.signal })
      .then((res) => {
        const data = res.data.data;

        // Filtering agents to remove duplicate Sova
        let filteredAgents = data.filter(
          (agent) => agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"
        );

        if (classe !== "") {
          // Capitalizing the first letter of the class
          const capitalizedClass = classe.charAt(0).toUpperCase() + classe.slice(1); 
          // Removing the plural form
          const singularClass = capitalizedClass.endsWith("s") ? capitalizedClass.slice(0, -1) : capitalizedClass;
          filteredAgents = filteredAgents.filter(
            (agent) => agent.role.displayName === singularClass
          );
        }

        setAgents(filteredAgents);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [classe]); 

  return { agents, error, isLoading };
};

export default useAgents;

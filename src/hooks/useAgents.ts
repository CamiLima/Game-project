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

 export interface Agents {
    uuid: string;
    displayName: string;
    background: string;
    fullPortrait: string;
    abilities: Ability[];
    role: Role[];

  }
  
interface FetchAgentsResponse {
    count: number;
    data: Agents[];
  }

const useAgents = () =>{
    const [agents, setAgents] = useState<Agents[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
      apiClient
        .get<FetchAgentsResponse>("/agents", {signal: controller.signal})
        .then((res) => {
          const data = res.data.data;
  
          setAgents(data);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    return {agents, error, isLoading}
}

export default useAgents;
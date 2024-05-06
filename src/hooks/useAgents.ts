import { useState, useEffect } from "react";
import apiClient from "../services/api.client";
import { CanceledError } from "axios";

interface Agents {
    uuid: string;
    displayName: string;
  }
  
  interface FetchAgentsResponse {
    count: number;
    data: Agents[];
  }

const useAgents = () =>{
    const [agents, setAgents] = useState<Agents[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<FetchAgentsResponse>("/agents", {signal: controller.signal})
        .then((res) => {
          const data = res.data.data;
  
          setAgents(data);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        });

        return () => controller.abort();
    }, []);

    return {agents, error}
}

export default useAgents;
import { useEffect, useState } from "react";

function UseCurrency(currency) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://v6.exchangerate-api.com/v6/12edb77108b7f7278d845d3c/latest/${currency}`
                );
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                
                if (result.result === "success") {
                    setData(result.conversion_rates);
                } else {
                    throw new Error(result.error || "Unknown API error");
                }
            } catch (err) {
                setError(err.message);
                console.error("Error fetching currency data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currency]);

    return { data, loading, error };
}

export default UseCurrency;
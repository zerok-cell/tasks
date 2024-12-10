import { Card, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getJoke from "../api/superhero_get.ts";



const CardsNews = () => {
    const [count, setCount] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getJoke()
            setCount(result)
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    console.log(count)
    return (
        <>
            {count !== null && count  ? (
               count.map((item, index) => (
                   <Card.Root key={index}>
                       <Text>{item}</Text>
                   </Card.Root>
               ))
            ) : (
                <Text>No joke available.</Text>
            )}
        </>
    );
};

export default CardsNews;
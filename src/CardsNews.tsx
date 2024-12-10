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

    return (
        <>
            {count !== null && count  ? (
               count.map((item, index) => (
                   item.map((items,key)=>{
                       <Card.Root key={key}>
                           <Text>{items.name}</Text>
                       </Card.Root>
                   })
               ))
            ) : (
                <Text>No joke available.</Text>
            )}
        </>
    );
};

export default CardsNews;
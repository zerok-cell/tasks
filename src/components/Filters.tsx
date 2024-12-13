import {Flex} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {swap} from "@/store/slices/filterSlice.ts";

const Filters = ()=>{
    const dispatch = useDispatch();



    return (
        <Flex gap={10}>
            <button onMouseUp={()=>{
                dispatch(swap(1))
            }}>All</button>
            <button onMouseUp={()=>{
                dispatch(swap(0))
            }}>Favorites</button>
        </Flex>
    )
}

export default Filters
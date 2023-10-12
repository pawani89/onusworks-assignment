import { useEffect, useState } from "react";

const useTextFieldHandler = (inputValue: string) => {
    const [data, setData] = useState("");
    // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     console.log("akka:", e.target.value)
    //     setName(e.target.value)

    // }
    useEffect(() => {
        setData(inputValue);
    }, [inputValue])

    return {
        data,
        setData
    }
}
export default useTextFieldHandler;
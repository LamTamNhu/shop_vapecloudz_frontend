import {useParams} from "react-router-dom";

export default function ItemList() {
    const params = useParams()
    return (
        <>
            {params.category != null ? <h2>Cai nit</h2> : null}
        </>
    )
}
import { useParams } from "react-router-dom";

function Detail() {
    const { name } = useParams();
    return (
    <div>Detail - {name}</div>
  )
}

export default Detail
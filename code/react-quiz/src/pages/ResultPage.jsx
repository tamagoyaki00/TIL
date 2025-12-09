import { useLocation } from "react-router-dom";

export default function ResultPage() {
    const location = useLocation();
    const maxQuizLen = location.state.maxQuizLen
    const corrrectNum = location.state.correctNumLen
  return (
    <div>
        <h1>Result</h1>
        <p>あなたの正解数は…</p>
        <p>{`全${maxQuizLen}問中${corrrectNum}問正解でした！`}</p>
    </div>
  )
}

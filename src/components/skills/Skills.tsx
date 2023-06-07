import { useEffect, useState } from "react"
import { SkillsType } from "./skills.types";

function Skills(props: SkillsType) {
    const {skills} = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 1001);
    })
  return (
    <div>
      <ul>{skills.map((item, index) => {
        return <li key={index}>{item}</li>
      })}</ul>
      {isLoggedIn ? <button>Learn React</button> : <button onClick={() => setIsLoggedIn(true)}>LogIn</button>}
    </div>
  )
}

export default Skills
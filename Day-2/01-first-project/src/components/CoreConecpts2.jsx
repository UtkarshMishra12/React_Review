import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts2= () =>{
    return(
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> (
            <CoreConcepts  key={conceptItem.title} {...conceptItem}/>
            ))}
          </ul>
        </section>
    );
}

export default CoreConcepts2;
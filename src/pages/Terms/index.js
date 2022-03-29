import config from '../../config.js';
import "./styles.scss";

const Terms = () =>{
    return (
        <div id="terms">
        {
            config.terms.map(section => (
                <div key={section.title.toLowerCase()} className="Terms-section">
                    <h2>{section.title}</h2>
                    {section.description}
                </div>
            ))
        }
        </div>
    )
}

export default Terms;
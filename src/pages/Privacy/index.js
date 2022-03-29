import config from '../../config.js';
import "./styles.scss";

const Privacy = () => {
    return (
        <div id="privacy">
        {
            config.privacy.map(section => (
                <div key={section.title.toLowerCase()} className="Privacy-section">
                    <h2>{section.title}</h2>
                    {section.description}
                </div>
            ))
        }
        </div>
    )
}

export default Privacy;

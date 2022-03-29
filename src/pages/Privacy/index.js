import config from '../../config.js'

const Privacy = () => {
    return (
        <>
			<div id="Privacy">
                {
                    config.privacy.map(section => {
                        return (
                            <div key={section.title.toLowerCase()} className="Privacy-section">
                                <h2>{section.title}</h2>
                                {section.description}
                            </div>
                        )
                    })
                }
			</div>
        </>
    )
}

export default Privacy;

import config from '../../config.js'


const Terms = () =>{
    return (
        <>
			<div id="Terms">
                {
                    config.terms.map(section => {
                        return (
                            <div key={section.title.toLowerCase()} className="Terms-section">
                                <h2>{section.title}</h2>
                                <p>{section.description}</p>
                            </div>
                        )
                    })
                }
			</div>
        </>
    )
}

export default Terms;
import config from "../../../config";
//import "./styles.scss";

const Admin = () => {
        const fillSelect = async (table) => {
            let url = 'http://localhost:3002/api/users';

            await fetch(url)
            .then(res => res.json())
            .then(out => console.log(out));
    }
	
	return (
		<div id="Espace Administation">
            <h1>Espace Administation</h1>
            <form>
                <select name="student" id="student">
				{
					fillSelect('users')
				}
                </select>
                <input type="submit" value="Submit" />
                <select name="delegay" id="delegay">
                {
                    
                }
                </select>
                <input type="submit" value="Submit" />
                <select name="tutor" id="tutor">
                {
                    
                }
                </select>
            <input type="submit" value="Submit" />
            </form>
		</div>
	)
}


export default Admin;
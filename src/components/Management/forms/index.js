import { useEffect, useState } from "react";
import $ from "jquery";

export const Form = props => {

	const { type, role, data } = props.data;
	const { id, first_name, last_name, login, school, class: class_name } = data;

	return (
		<form action="http://localhost/server/php/form.php" method="POST">
			<h2>
			{
				type === "add"
				? `Add a ${role}`
				: type === "edit"
				? `Edit ${data.first_name} ${data.last_name} (${role})`
				: type === "delete"
				? `Delete ${data.first_name} ${data.last_name} (${role})`
				: null
			}
			</h2>
			<fieldset>
				<legend>Information</legend>
				<div>
					<label htmlFor="first_name">First Name</label>
					<input type="text" name="first_name" id="input_first_name" defaultValue={data ? first_name : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="last_name">Last name</label>
					<input type="text" name="last_name" id="input_last_name" defaultValue={data ? last_name : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="inputEmail" defaultValue={data ? login : null} disabled={type === "delete"} required/>
				</div>
				{
					type === "add"
					? <div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="inputPassword" required/>
					</div>
					: null
				}
				<div>
					<label htmlFor="school">School</label>
					<input type="text" name="school" id="input_school" defaultValue={data ? school : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="class">Class</label>
					<input type="text" name="class" id="class" defaultValue={data ? class_name : null} disabled={type === "delete"} required/>
				</div>
				<input type="hidden" name="role" value={role} />
				<input type="hidden" name="type" value={type} />
				{
					type !== "add"
					? <input type="hidden" name="id" value={id} />
					: null
				}
				<div className="g2">
					<button type="submit">
					{
						type === "add"
						? "Add"
						: type === "edit"
						? `Update ${first_name} ${last_name}`
						: type === "delete"
						? `Delete ${first_name} ${last_name}`
						: "Submit"
					}
					</button>
				</div>
			</fieldset>
		</form>
	);
}

export const OfferForm = props => {

	const [companies, setCompanies] = useState([]);
	
	const { type, role, data } = props.data;
	const { id, title, description, minor, lasts, salary, published_at, places_available, id_company, id_address } = data;

	useEffect(() => {
		$.get("http://localhost:3002/api/company", data => setCompanies(data));
	}, [id_company]);

	return (
		<form action="http://localhost/server/php/form.php" method="POST">
			<h2>
			{
				type === "add"
				? "Add an offer"
				: type === "edit"
				? `Edit ${data.title}`
				: type === "delete"
				? `Delete ${data.title}`
				: null
			}
			</h2>
			<fieldset>
				<legend>Information</legend>
				{
					role === "admin" && type === "add"
					? <div>
						<label htmlFor="company">Company</label>
						<select name="company">
						{
							companies.map(company => <option key={`${company.id}${company.name.replace(" ", "").toLowerCase()}`} value={company.id}>{company.name}</option>)
						}
						</select>
					</div>
					: <input type="hidden" name="company" value={id_company} />
				}
				<div>
					<label htmlFor="title">Title</label>
					<input type="text" name="title" defaultValue={data ? title : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input type="text" name="description" defaultValue={data ? description : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="minor">Minor</label>
					<input type="text" name="minor" defaultValue={data ? minor : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="salary">Salary</label>
					<input type="number" name="salary" defaultValue={data ? salary : null} disabled={type === "delete"} min="0" required/>
				</div>
				<div>
					<label htmlFor="places_available">Available positions</label>
					<input type="number" name="places_available" defaultValue={data ? places_available : null} disabled={type === "delete"} min="1" required/>
				</div>
				<input type="hidden" name="date" value={lasts} />
				<input type="hidden" name="type" value={type} />
				<input type="hidden" name="id" value={id} />
				<input type="hidden" name="published_at" value={published_at} />
				<input type="hidden" name="id_address" value={id_address} />
				<div className="g2">
					<button type="submit">
					{
						type === "add"
						? "Add"
						: type === "edit"
						? `Update ${title}`
						: type === "delete"
						? `Delete ${title}`
						: "Submit"
					}
					</button>
				</div>
			</fieldset>
		</form>
	);
}

export const BusinessForm = props => {

	const { type, role, data } = props.data;
	const { name, students_visible } = data;

	return (
		<form action="http://localhost/server/php/form.php" method="POST">
			<h2>
			{
				type === "add"
				? "Add an offer"
				: type === "edit"
				? `Edit ${data.title}`
				: type === "delete"
				? `Delete ${data.title}`
				: null
			}
			</h2>
			<fieldset>
				<legend>Information</legend>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" defaultValue={data ? data.name : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="visible">Visible</label>
					<input type="checkbox" name="visible" defaultChecked={data ? data.visible : null} disabled={type === "delete"} required/>
				</div>
				<div className="g2">
					<button type="submit">
					{
						type === "add"
						? "Add"
						: type === "edit"
						? `Update ${name}`
						: type === "delete"
						? `Delete ${name}`
						: "Submit"
					}
					</button>
				</div>
			</fieldset>
		</form>
	);
}
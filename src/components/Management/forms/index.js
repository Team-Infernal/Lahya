import { useEffect, useState } from "react";
import $ from "jquery";
import moment from "moment";

export const Form = props => {

	const { type, role, data } = props.data;
	const { id, first_name, last_name, login, hash, school, class: class_name } = data;

	return (
		<form action="https://lahya.net/auth/form.php" method="POST">
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
				{
					type !== "delete"
					? <div>
						<label htmlFor="first_name">First Name</label>
						<input type="text" name="first_name" defaultValue={data ? first_name : null} required/>
					</div>
					: <input type="hidden" name="first_name" defaultValue={data ? first_name : null} required/>
				}
				{
					type !== "delete"
					? <div>
						<label htmlFor="last_name">Last Name</label>
						<input type="text" name="last_name" defaultValue={data ? last_name : null} required/>
					</div>
					: <input type="hidden" name="last_name" defaultValue={data ? last_name : null} required/>
				}
				{
					type !== "delete"
					? <div>
						<label htmlFor="email">Email</label>
						<input type="text" name="email" defaultValue={data ? login : null} required/>
					</div>
					: <input type="hidden" name="email" defaultValue={data ? login : null} required/>
				}
				{
					type === "add"
					? <div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="inputPassword" required/>
					</div>
					: <input type="hidden" name="password" value={data ? hash : null} />
				}
				{
					type !== "delete"
					? <div>
						<label htmlFor="school">School</label>
						<input type="text" name="school" defaultValue={data ? school : null} required/>
					</div>
					: <input type="hidden" name="school" defaultValue={data ? school : null} required/>
				}
				{
					type !== "delete"
					? <div>
						<label htmlFor="class">Class</label>
						<input type="text" name="class" defaultValue={data ? class_name : null} required/>
					</div>
					: <input type="hidden" name="class" defaultValue={data ? class_name : null} required/>
				}
				<input type="hidden" name="role" value={role} />
				<input type="hidden" name="type" value={type} />
				{
					type !== "add"
					? <input type="hidden" name="id" value={id} />
					: null
				}
				<div>
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
	
	const { type, role, is, data } = props.data;
	const { id, title, description, minor, lasts, salary, published_at, places_available, id_company, id_address } = data;

	useEffect(() => {
		$.get("https://lahya.net/api/company", data => setCompanies(data));
	}, [id_company]);

	return (
		<form action="https://lahya.net/auth/form.php" method="POST">
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
				{
					type !== "delete"
					? <div>
						<label htmlFor="title">Title</label>
						<input type="text" name="title" defaultValue={data ? title : null} required/>
					</div>
					: <input type="hidden" name="title" defaultValue={data ? title : null} required/>
				}
				{
					type !== "delete"
					? <div>
						<label htmlFor="description">Description</label>
						<textarea name="description" defaultValue={data ? description : null} required/>
					</div>
					: <input type="hidden" name="description" defaultValue={data ? description : null} required/>
				}
				{
					type !== "delete"
					? <div>
						<label htmlFor="minor">Minor</label>
						<input type="text" name="minor" defaultValue={data ? minor : null} required/>
					</div>
					: <input type="hidden" name="minor" defaultValue={data ? minor : null} required/>
				}
				{
					type !== "delete"
					? <div>
						<label htmlFor="salary">Salary</label>
						<input type="number" name="salary" defaultValue={data ? salary : null} min="0" required/>
					</div>
					: <input type="hidden" name="salary" defaultValue={data ? salary : null} required/>
				}
				{
					type !== "delete"
					? <div>
						<label htmlFor="places_available">Available positions</label>
						<input type="number" name="places_available" defaultValue={data ? places_available : null} min="1" required/>
					</div>
					: <input type="hidden" name="places_available" defaultValue={data ? places_available : null} required/>
				}
				{
					type === "add" || type === "edit"
					? <div>
						<label htmlFor="lasts">Lasts</label>
						<input type="date" name="lasts" required />
					</div>
					: <input type="hidden" name="date" value={lasts} />
				}
				<input type="hidden" name="type" value={type} />
				<input type="hidden" name="id" value={id} />
				<input type="hidden" name="id_address" value={id_address || 1} />
				<input type="hidden" name="is" value={is} />
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

	const { type, role, is, data } = props.data;
	const { name, students_accepted, students_visible, id} = data;

	return (
		<form action="https://lahya.net/auth/form.php" method="POST">
			<h2>
			{
				type === "add"
				? "Add a company"
				: type === "edit"
				? `Edit ${name}`
				: type === "delete"
				? `Delete ${name}`
				: null
			}
			</h2>
			<fieldset>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" defaultValue={data ? name : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="students_accepted">students_accepted</label>
					<input type="text" name="students_accepted" defaultValue={data ? students_accepted : null} disabled={type === "delete"} required/>
				</div>
				<div>
					<label htmlFor="visible">Visible</label>
					<input type="checkbox" name="visible" defaultChecked={data ? students_visible : null} hidden={type === "delete"} />
				</div>
				<input type="hidden" name="is" value={is} />
				<input type="hidden" name="id" value={id} />
				<input type="hidden" name="type" value={type} />

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
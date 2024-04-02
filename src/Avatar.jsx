import PropType from "prop-types";
import { getImageUrl } from "./utils";

const Avatar = ({ person, size }) => {
	let thumbnailSize = "s";

	thumbnailSize = size >= 90 ? "b" : thumbnailSize;

	return (
		<>
			<img
				className="avatar"
				src={getImageUrl(person, thumbnailSize)}
				alt={person.name}
				width={size}
				height={size}
			/>
		</>
	);
};

Avatar.propTypes = {
	person: PropType.object.isRequired,
	size: PropType.number.isRequired,
};

export default Avatar;

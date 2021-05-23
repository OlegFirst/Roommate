import { useEffect, useRef, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
const grayPlaceholder =
	'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

const ImageLoader = ({ isShow, handleClose, handleFormData }) => {
	const refInput = useRef(null);

	const [file, setFile] = useState(null);
	useEffect(() => {
		if (!isShow) {
			return;
		}

		refInput.current.addEventListener('change', function () {
			if (this.files && this.files[0]) {
				let image = document.querySelector('#myImg');
				image.onload = () => {
					URL.revokeObjectURL(image.src);
				};
				setFile(this.files[0]);
				image.src = URL.createObjectURL(this.files[0]);
			}
		});
	}, [isShow]);

	const OKHandle = () => {
		handleClose(document.querySelector('#myImg').src);
	};

	const handleUpload = () => {
		let formData = new FormData();
		formData.append('image', file);
		handleFormData(formData);
	};

	return (
		<Modal
			show={isShow}
			onHide={() => handleClose(null)}
			className="image-loader"
		>
			<Modal.Body>
				<div className="image-loader__block">
					<input ref={refInput} type="file" />
				</div>
				<img className="image-loader__image" id="myImg" src={grayPlaceholder} />
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={() => handleClose(null)}>
					Close
				</Button>
				<Button variant="primary" onClick={handleUpload}>
					OK
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ImageLoader;

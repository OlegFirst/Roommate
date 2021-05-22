import { useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageLoader = ({ isShow, handleClose }) => {
	const refInput = useRef(null);

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
				image.src = URL.createObjectURL(this.files[0]);
			}
		});
	}, [isShow]);

	return (
		<Modal show={isShow} onHide={handleClose} className="image-loader">
			<Modal.Body>
				<div className="image-loader__block">
					<input ref={refInput} type="file" />
				</div>
				<img className="image-loader__image" id="myImg" src="#" />
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					OK
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ImageLoader;

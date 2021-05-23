import { useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageLoader = ({ isShow, handleClose }) => {
	const refInput = useRef(null);

	useEffect(() => {
		if (!isShow) {
			return;
		}

		refInput.current.addEventListener('change', function () {
			let image = document.querySelector('#myImg');
			let file = document.querySelector('input[type=file]').files[0];
			
			let reader = new FileReader();
			reader.addEventListener('load', function() {
				image.src = reader.result;
			});
			
			if (file) {
				reader.readAsDataURL(file);
			}
		});
	}, [isShow]);
	
	const OKHandle = () => {
		handleClose(document.querySelector('#myImg').src);
	};

	return (
		<Modal show={isShow} onHide={() => handleClose(null)} className="image-loader">
			<Modal.Body>
				<div className="image-loader__block">
					<input ref={refInput} type="file" />
				</div>
				<img className="image-loader__image" id="myImg" src="#" />
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={() => handleClose(null)}>
					Close
				</Button>
				<Button variant="primary" onClick={OKHandle}>
					OK
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ImageLoader;

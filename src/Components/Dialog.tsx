import React, { SetStateAction, useState } from "react";
import cx from "classnames";
import CloseIcon from '@material-ui/icons/Close';
// @ts-ignore
import { Modal } from "react-dialog-polyfill";

export type DialogComponentProps = {
	className?: string;
	children?: JSX.Element;
};

export type DialogHeaderProps = {
	title: string;
	children?: React.ReactNode;
	hideClose?: boolean;
	onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type DialogProps = {
	size?: DialogSize;
	className?: string;
	open: boolean;
	children: JSX.Element[];
	onClose?: React.Dispatch<SetStateAction<boolean>>;
};

export enum DialogSize {
	Small,
	Normal,
	Large,
	Full,
}

const Dialog = (props: DialogProps): JSX.Element => {
	const { size, className, open, children } = props;
	const [isOpen, setIsOpen] = useState<boolean>(open || false);

	if (open !== isOpen) {
		setIsOpen(open);
	}

	let sizeClass;
	switch (size) {
		case DialogSize.Small:
			sizeClass = "md:w-1/3";
			break;
		case DialogSize.Normal:
			sizeClass = "md:w-2/3 h-2/3";
			break;
		case DialogSize.Large:
			sizeClass = "md:w-4/5";
			break;
		case DialogSize.Full:
			sizeClass = "w-full h-full";
			break;
		default:
			sizeClass = "";
	}
	return (
		<Modal
			open={isOpen}
			className={cx("rounded shadow-md", sizeClass, className)}
		>
			<div className="flex flex-col h-full">
				{children}
			</div>
		</Modal>
	);
};

Dialog.Header = ({
	children,
	title,
	onClose,
	hideClose,
}: DialogHeaderProps): JSX.Element => {
	return (
		<div className="modal-title flex flex-initial justify-between items-center pb-2">
			{!children && (
				<>
					<p className="text-2xl font-bold">{title}</p>

					<div
						className="modal-close cursor-pointer"
						onClick={(e) => {
							onClose && onClose(e);
						}}
					>
						{!hideClose && <CloseIcon />}
					</div>
				</>
			)}
			{children}
		</div>
	);
};

Dialog.Body = ({ className, children }: DialogComponentProps) => (
	<div className={cx(["flex-1 overflow-hidden", className])}>{children}</div>
);

Dialog.Footer = ({ className, children }: DialogComponentProps) => {
	return (
		<div className={`flex items-center justify-end mt-4 ${className}`}>
			{children}
		</div>
	);
};

export default Dialog;
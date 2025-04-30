import React, { Component, MouseEventHandler } from "react";

interface Props {
	onClick: MouseEventHandler<HTMLDivElement>;
	color: string;
	width: number;
	height: number;
	fontSize: number;
	borderWidth: number;
    buttonText: string;
	id: string;
	style?: any;
}

class FancyButton extends Component<Props> {
	render() {
		// Mask id and styling
        // need unique id's for multiple buttons
		const maskStyle = '#fancy-masked-element_' + this.props.id + ' { mask: url(#' + this.props.id + '); -webkit-mask: url(#' + this.props.id + ')}';

		const buttonStyle = {
			width: this.props.width,
			height: this.props.height,
			...this.props.style
		};

		const fancyFrontStyle = {
			transform: 'rotateX(0deg) translateZ(' + this.props.height / 2 + 'px )'
		};

		const fancyBackStyle = {
			transform: 'rotateX(90deg) translateZ( ' + this.props.height / 2 + 'px )'
		};

		// SVG attributes
		const textTransform = 'matrix(1 0 0 1 ' + this.props.width / 2 + ' ' + this.props.height / 1.6 + ')';
		const viewBox = '0 0 ' + this.props.width + ' ' + this.props.height;

		return (
			<div className="fancy-button"
				style={buttonStyle}
				onClick={this.props.onClick}>
				<div className="fancy-flipper">
					<div className="fancy-front" style={fancyFrontStyle}>
						<svg
							height={this.props.height}
							width={this.props.width}
							viewBox={viewBox}>
							<defs>
								<mask id={this.props.id}>
									<rect width="100%" height="100%" fill="#FFFFFF"/>
									<text className="mask-text button-text" fill="#000000" transform={textTransform} fontSize={this.props.fontSize} width="100%" textAnchor="middle" letterSpacing="1">{this.props.buttonText}</text>
								</mask>
							</defs>
							<style>
								{maskStyle}
							</style>
							<rect id={'fancy-masked-element_' + this.props.id} fill={this.props.color} width="100%" height="100%"/>
						</svg>
					</div>
					<div className="fancy-back" style={fancyBackStyle}>
						<svg
							height={this.props.height}
							width={this.props.width}
							viewBox={viewBox}>
							<rect stroke={this.props.color}
								strokeWidth={this.props.borderWidth}
								fill="transparent"
								width="100%"
								height="100%"/>
							<text className="button-text" transform={textTransform} fill={this.props.color} fontSize={this.props.fontSize} textAnchor="middle" letterSpacing="1">{this.props.buttonText}</text>
						</svg>
					</div>
				</div>
			</div>
		);
	}
}

export default FancyButton;
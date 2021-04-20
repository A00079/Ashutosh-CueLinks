import React from "react";
import { history } from "../../utils";
import { Text } from "../../components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function SecondaryPublicLayout(props) {
	return (
		<div>
			<div className="fixed h-14 w-full p-4 bg-gray-900 flex items-center justify-between">
				<div onClick={() => history.goBack()}>
					<ArrowBackIcon style={{ color: "white" }} />
				</div>
				<div>
					<Text
						size="sm"
						isTitle={true}
						classes="uppercase"
						weight="700"
						variant="white"
					>
						{history.location.pathname.slice(1)}
					</Text>
				</div>
			</div>
			<div className="p-0">{props.children}</div>
		</div>
	);
}

export default SecondaryPublicLayout;

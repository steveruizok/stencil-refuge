const styles = {
  button: `
		border-radius: 3px;
		background-color: #000;
		padding: 12px;
	`
};

import jss from "jss";
import jssTemplate from "jss-template";
jss.use(jssTemplate());

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;

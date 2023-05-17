export async function GET({ params }) {
	const { templateId } = params;
	let cssContent
	console.log('responding to request for templateId : ', params);
		cssContent = `
		
html, body {
    background-color: blue;
}
div {
  border: 1px solid gray;
}
`;
	// Return the CSS content as a response

	return new Response(cssContent, { headers: { 'Content-Type': 'text/css; charset=utf-8' } });
}
import{_ as t,h as e}from"./index.529bda9e.js";const i={},o=e(`<div class="text-2xl mb-4">Fetch Data with Axios</div><div style="list-style-type:decimal;"><li>Open your terminal, and change current working directory to your project</li><li>Install axios with <code>npm i axios</code></li><li>Create your file named <i>index.js</i> or any name you want.</li><li>Add this code:</li><pre>		const axios = require(&#39;axios&#39;)\r
\r
		axios.get(&#39;https://api.github.com/users/clark-john&#39;)\r
			.then(res =&gt; {\r
				console.log(res.data.followers)\r
			})\r
			.catch(err =&gt; {\r
				throw err\r
			}) \r
		</pre><li>This will get number of my followers in GitHub. You can also replace the URL at the <code>get()</code> function. <code>get()</code> function returns a Promise, so we&#39;re adding <code>then</code> and <code>catch</code> blocks with callbacks. </li><li> We&#39;re printing the response, but you can replace it with the keyword <code>return</code></li><li> Run the .js file with this command: <code>node index.js</code> And it will print number of my followers. </li></div><div class="mt-5 text-xl"> I may create Vuepress version of this. </div>`,3);function r(n,c){return o}var a=t(i,[["render",r]]);export{a as default};

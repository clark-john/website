<script lang="ts" setup>
import { Skill } from "types";

const skills: Skill[] = [
	{
		name: "Vue",
		icon: "io-logo-vue"
	},
	{
		name: "Angular",
		icon: "co-angular"
	},
	{
		name: "TypeScript",
		icon: "si-typescript"
	},
	{
		name: "Sass",
		icon: "co-sass-alt"
	},
	{
		name: "Node",
		icon: "fa-node-js"
	},
	{
		name: "GraphQL",
		icon: "si-graphql"
	},
	{
		name: "Nest",
		icon: "si-nestjs"
	},
	{
		name: "Python",
		icon: "io-logo-python"
	},
	{
		name: "Java",
		icon: "co-java"
	}
];
</script>
<template>
	<div>
		<div class="section-header">Skills:</div>
		<div class="grid grid-cols-3 my-8 gap-2 gap-y-4 max-[415px]:grid-cols-2">
			<SkillItem
				v-for="{ icon, name } in skills"
				:icon="icon"
				:name="name"
				:key="name.toLowerCase()"
			/>
		</div>
	</div>
</template>

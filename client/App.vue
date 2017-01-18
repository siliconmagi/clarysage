<template>
	<div class="container">
		<md-toolbar>
			<md-button class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Default</h2>

			<md-button class="md-icon-button">
				<md-icon>favorite</md-icon>
			</md-button>
		</md-toolbar>
		<md-sidenav class="md-left md-fixed" ref="leftSidenav">
			<md-toolbar class="md-large">
				<div class="md-toolbar-container">
					<h3 class="md-title">Sidenav content</h3>
				</div>
			</md-toolbar>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
		</md-sidenav>
	</div>
</template>
<style lang="scss">
@import './styles/variables.scss';

$sizebar-size: 280px;
[v-cloak] {
	display: none;
}
html,
body {
	height: 100%;
	overflow: hidden;
}
body {
	display: flex;
}
.container {
	min-height: 100%;
	display: flex;
	flex-flow: column nowrap;
	flex: 1;
	transition: $swift-ease-out;
	@media (min-width: 1281px) {
		padding-left: $sizebar-size;
	}
}
.main-sidebar.md-sidenav {
	.md-sidenav-content {
		width: $sizebar-size;
		display: flex;
		flex-flow: column;
		overflow: hidden;
		@media (min-width: 1281px) {
			top: 0;
			pointer-events: auto;
			transform: translate3d(0, 0, 0);
			box-shadow: $material-shadow-2dp;
		}
	}
	.md-backdrop {
		@media (min-width: 1281px) {
			opacity: 0;
			pointer-events: none;
		}
	}
	.md-toolbar {
		min-height: 172px;
		border-bottom: 1px solid rgba(#000, .12);
	}
	.vue-material-logo {
		font-size: 24px;
		a {
			width: 100%;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			color: inherit;
			text-decoration: none;
			&:hover {
				color: inherit;
				text-decoration: none;
			}
		}
		img {
			width: 160px;
			margin-bottom: 16px;
		}
	}
	.main-sidebar-links {
		overflow: auto;
		flex: 1;
		.md-inset .md-list-item-container {
			padding-left: 36px;
		}
		.md-list-item-container {
			font-size: 14px;
			font-weight: 500;
		}
	}
}
.main-content {
	padding: 16px;
	flex: 1;
	overflow: auto;
	background-color: #fff;
	transform: translate3D(0, 0, 0);
	transition: $swift-ease-out;
	transition-delay: .2s;
}
.md-router-enter,
.md-router-leave {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	@media (min-width: 1281px) {
		left: $sizebar-size;
	}
	.main-content {
		opacity: 0;
		overflow: hidden;
	}
}
.md-router-leave {
	z-index: 1;
	transition: $swift-ease-in;
	transition-duration: .25s;
}
.md-router-enter {
	z-index: 2;
	transition: $swift-ease-out;
	.main-content {
		transform: translate3D(0, 10%, 0);
	}
}
code {
	&:not(.hljs) {
		margin-left: 1px;
		margin-right: 1px;
		padding: 0 4px;
		display: inline-block;
		border-radius: 2px;
		font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;
		pre {
			margin: 8px 0;
		}
	}
}
.phone-viewport {
	width: 360px;
	height: 540px;
	margin-right: 16px;
	display: inline-block;
	position: relative;
	overflow: hidden;
	background-color: #fff;
	border: 1px solid rgba(#000, .12);
}
.api-table tr > td:first-child {
	white-space: nowrap;
}

</style>
<script>
	import Vue from 'vue';
export default {
	data() {
		return {
			toolbar: true,
			theme: 'default',
			pageTitle: ''
		};
	},
	methods: {
		toggleSidenav() {
			this.$refs['main-sidebar'].toggle();
		},
		closeSidenav() {
			this.$refs['main-sidebar'].close();
		}
	}
};
	</script>

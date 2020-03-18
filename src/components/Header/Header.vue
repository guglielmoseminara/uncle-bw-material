<template>
    <bw-material-header :scroll-target="$refs.mainContent" :start-menu="true">
        <template slot="startSlot">
            <slot name="logo"></slot>
        </template>
        <template slot="centerSlot">
            <template v-for="(navItem, navkey) in navObject.navItems">
                <router-link class="navbar-brand" :to="navItem.route.url" :key="navkey">
                    <span class="mdc-top-app-bar__title">{{navItem.text}}</span>
                </router-link>
            </template>
        </template>
        <template slot="drawerSlot">
          custom drawer content
        </template>
        <template slot="drawerHeaderSlot">
            Drawer header slot
        </template>
        <template slot="endSlot">
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Print this page">print</button>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Bookmark this page">bookmark</button>  
        </template>
      </bw-material-header>
</template>

<script>
    import { NavComponent } from 'uncle-vue';

    export default {
        extends: NavComponent,
        methods: {
            getIcon(icon) {
                //return this.$iconsProvider.get(icon);
            },
            async click(action) {
                this.loading = true;
                await action.execute();
                this.loading = false;
            }
        }
    }
</script>
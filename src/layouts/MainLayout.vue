<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="teal-10"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          
        </q-toolbar-title>

        <div style="color:black; text-align:right;">
          <!-- Quasar v{{ $q.version }} -->
          <!-- <div class="row items-center no-wrap"> -->
              <a href="/" style="text-decoration:none; color:black">
                <q-icon name="home" size="20px"/>
              </a>
          <!-- </div> -->
          </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      bordered
      class="bg-white"
    >
      <q-list>
        <q-item-label
          header
          class="bg-teal-10 text-white text-center"
      > 
        <q-icon name="link" size="20px"/> LINKS

        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [

   {
    title: 'Docs',
    caption: 'Based on quasar.dev',
    icon: 'home',
    link: 'https://quasar.dev'
  },
  // {
  //   title: 'Github',
  //   caption: 'github.com/quasarframework',
  //   icon: 'code',
  //   link: 'https://github.com/quasarframework'
  // },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev'
  // },
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // },
  {
    title: 'Github',
    caption: 'github.com/kimscode0116',
    icon: 'code',
    link: 'https://github.com/kimscode0116'
  },
  {
    title: 'Portfolio',
    caption: 'Profile web site at Netlify',
    icon: 'language',
    link: 'https://stoic-villani-435777.netlify.app/#/'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

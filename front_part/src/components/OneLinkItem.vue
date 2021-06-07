<template>
  <q-item
    clickable
    tag="a"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" class="text-grey" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-grey">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'OneLinkItem',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div>
    <slot />
    <Table
      :context="$parent"
      class="margin-bottom"
      border
      :columns="columns"
      :data="data" />
    <Page
      :total="total"
      :current="pageCurrent"
      :page-size="10"
      show-total
      show-elevator
      @on-change="handlePageChange" />
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    total: {
      type: Number,
      default: 1
    },
    pageCurrent: {
      type: Number,
      default: 1
    },
    searchWhere: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    handlePageChange (current) {
      this.$router.push({
        query: Object.assign(
          { listPageCurrent: current },
          this.searchWhere
            ? { listSearchWhere: JSON.stringify(this.searchWhere) }
            : null
        )
      })
    }
  }
}
</script>

<template>
  <div class="halumm-perf">
    <table class="inputs">
      <thead>
        <tr>
          <th style="width:26%">性能指标</th>
          <th style="width:35%">美标参考值</th>
          <th>汉尔姆填写值</th>
          <th style="width:22%">标准</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="i">
          <td class="k">{{ r.k }}</td>
          <td class="ref">{{ r.ref }}</td>
          <td>
            <input v-model="vals[i]" :placeholder="placeholder" />
          </td>
          <td class="std">{{ r.std }}</td>
        </tr>
      </tbody>
    </table>

    <div class="bar">
      <button class="gen" @click="gen">生成填好的表格</button>
      <button class="clr" @click="clear">清空重填</button>
    </div>

    <hr />
    <h3 class="out-title">预览：填好的 SPEC 性能表</h3>
    <table v-show="showOut" class="out">
      <thead>
        <tr><th>性能指标</th><th>美标参考值</th><th>汉尔姆填写值</th><th>标准</th></tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="i">
          <td>{{ r.k }}</td>
          <td>{{ r.ref }}</td>
          <td class="filled">{{ vals[i] || '（待填）' }}</td>
          <td>{{ r.std }}</td>
        </tr>
      </tbody>
    </table>
    <p class="note">{{ hint }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  rows: { type: Array, required: true },
  placeholder: { type: String, default: '点击填写' },
})

const vals = ref(props.rows.map(() => ''))
const showOut = ref(false)
const hint = ref('')

function gen() {
  const miss = vals.value.filter(v => !v.trim()).length
  showOut.value = true
  hint.value = miss
    ? `尚未填写 ${miss} 项（标"待填"），请补全后重新生成。`
    : '全部填写完成。此表可直接复制打印用于提交。'
}
function clear() {
  vals.value = props.rows.map(() => '')
  showOut.value = false
  hint.value = ''
}
</script>

<style scoped>
.halumm-perf { font-family: "PingFang SC", "STHeiti", Arial, sans-serif; font-size: 13px; }
table.inputs { width: 100%; border-collapse: collapse; margin: 8px 0; }
table.inputs th, table.inputs td { border: 1px solid #ccc; padding: 6px 8px; vertical-align: middle; }
table.inputs th { background: #1a3d6d; color: #fff; }
table.inputs td.ref { background: #f2f6fc; color: #334455; }
table.inputs td.k { font-weight: 600; }
table.inputs td.std { background: #fafafa; color: #667788; }
table.inputs input {
  width: 100%; box-sizing: border-box; border: 1px solid #bbccdd; border-radius: 4px;
  padding: 5px 7px; font-size: 13px; background: #fffdef;
}
.bar { margin: 6px 0; display: flex; gap: 8px; }
.bar button { border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; font-size: 14px; }
.bar .gen { background: #1a3d6d; color: #fff; }
.bar .clr { background: #eee; color: #333; }
table.out { width: 100%; border-collapse: collapse; margin-top: 12px; }
table.out th, table.out td { border: 1px solid #999; padding: 6px 8px; vertical-align: top; }
table.out th { background: #dde6f2; }
table.out td.filled { color: #00aa55; font-weight: 600; }
.note { color: #888; font-size: 12px; margin-top: 6px; }
.out-title { margin: 10px 0 4px; }
</style>

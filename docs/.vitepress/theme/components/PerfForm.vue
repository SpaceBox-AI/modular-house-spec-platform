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
    <div v-show="showOut">
      <table class="out" ref="outTable">
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
      <div class="bar out-bar">
        <button class="export" @click="copyMarkdown">复制为 Markdown 表格</button>
        <button class="export" @click="copyHtml">复制表格（粘贴到 Word/Excel）</button>
      </div>
    </div>
    <p class="note">{{ hint }}</p>
    <textarea ref="clipArea" class="clip-area" aria-hidden="true"></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  rows: { type: Array, required: true },
  placeholder: { type: String, default: '点击填写' },
  sectionLabel: { type: String, default: '' },
})

const vals = ref(props.rows.map(() => ''))
const showOut = ref(false)
const hint = ref('')
const outTable = ref(null)
const clipArea = ref(null)

function gen() {
  const miss = vals.value.filter(v => !v.trim()).length
  showOut.value = true
  hint.value = miss
    ? `尚未填写 ${miss} 项（标"待填"），请补全后重新生成。`
    : '全部填写完成。可复制为 Markdown 或表格粘贴到 Word/Excel。'
}
function clear() {
  vals.value = props.rows.map(() => '')
  showOut.value = false
  hint.value = ''
}

function copy(value, okMsg) {
  clipArea.value.value = value
  clipArea.value.style.display = 'block'
  clipArea.value.select()
  try {
    document.execCommand('copy')
    hint.value = okMsg
  } catch (e) {
    hint.value = '复制失败，请手动选择并复制。'
  } finally {
    clipArea.value.style.display = 'none'
  }
}

function copyMarkdown() {
  const head = ['| 性能指标 | 美标参考值 | 汉尔姆填写值 | 标准 |', '|---|---|---|---|']
  const body = props.rows.map((r, i) =>
    `| ${r.k} | ${r.ref} | ${vals[i] || '（待填）'} | ${r.std} |`)
  const title = props.sectionLabel ? props.sectionLabel + '\n\n' : ''
  copy(title + [...head, ...body].join('\n'), '已复制为 Markdown 表格，可直接粘贴到文档/提交。')
}

function copyHtml() {
  copy(outTable.value.outerHTML, '已复制表格，可直接粘贴到 Word / Excel / 邮件。')
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
.bar { margin: 6px 0; display: flex; gap: 8px; flex-wrap: wrap; }
.bar button { border: none; padding: 8px 14px; border-radius: 5px; cursor: pointer; font-size: 13.5px; }
.bar .gen { background: #1a3d6d; color: #fff; }
.bar .clr { background: #eee; color: #333; }
.bar .export { background: #0e6b52; color: #fff; }
table.out { width: 100%; border-collapse: collapse; margin-top: 12px; }
table.out th, table.out td { border: 1px solid #999; padding: 6px 8px; vertical-align: top; }
table.out th { background: #dde6f2; }
table.out td.filled { color: #00aa55; font-weight: 600; }
.note { color: #888; font-size: 12px; margin-top: 6px; }
.out-title { margin: 10px 0 4px; }
.clip-area { position: fixed; top: -9999px; left: -9999px; opacity: 0; height: 1px; width: 1px; }
</style>

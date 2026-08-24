<template>
  <div class="supplier-comp">
    <table class="inputs">
      <thead>
        <tr>
          <th style="width:34%">合规核对项</th>
          <th style="width:30%">加州要求 / 参考路径</th>
          <th>供应商状态（下拉选择）</th>
          <th>备注 / 证据编号</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="i">
          <td class="k">{{ r.k }}</td>
          <td class="ref">{{ r.ref }}</td>
          <td>
            <select v-model="status[i]" :class="statusCls(i)">
              <option v-for="opt in opts" :key="opt" :value="opt">{{ opt }}</option>
            </select>
          </td>
          <td>
            <input v-model="notes[i]" placeholder="备注 / 文件编号" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="bar">
      <button class="gen" @click="gen">生成核对清单</button>
      <button class="clr" @click="clear">清空重填</button>
    </div>

    <hr />
    <h3 class="out-title">预览：供应商合规核对清单</h3>
    <div v-show="showOut">
      <div class="sum">
        待确认 <b>{{ nPending }}</b> 项 ｜ 已确认 <b>{{ nDone }}</b> 项 ｜ 不适用 <b>{{ nNa }}</b> 项 ｜ 完成率 <b>{{ pct }}</b>%
      </div>
      <table class="out" ref="outTable">
        <thead>
          <tr><th>合规核对项</th><th>加州要求 / 参考路径</th><th>供应商状态</th><th>备注 / 证据编号</th></tr>
        </thead>
        <tbody>
          <tr v-for="(r, i) in rows" :key="i">
            <td>{{ r.k }}</td>
            <td>{{ r.ref }}</td>
            <td :class="'st-' + statusKey(i)">{{ status[i] }}</td>
            <td>{{ notes[i] || '—' }}</td>
          </tr>
        </tbody>
      </table>
      <div class="bar out-bar">
        <button class="export" @click="copyMarkdown">复制为 Markdown 清单</button>
        <button class="export" @click="copyHtml">复制表格（粘贴到 Word/Excel）</button>
      </div>
    </div>
    <p class="note">{{ hint }}</p>
    <textarea ref="clipArea" class="clip-area" aria-hidden="true"></textarea>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  rows: { type: Array, required: true },
  sectionLabel: { type: String, default: '' },
})

const opts = ['待确认', '已确认', '不适用 N/A']
const status = ref(props.rows.map(() => '待确认'))
const notes = ref(props.rows.map(() => ''))
const showOut = ref(false)
const hint = ref('')
const outTable = ref(null)
const clipArea = ref(null)

const nPending = computed(() => status.value.filter(v => v === '待确认').length)
const nDone = computed(() => status.value.filter(v => v === '已确认').length)
const nNa = computed(() => status.value.filter(v => v === '不适用 N/A').length)
const pct = computed(() => {
  const total = status.value.length
  const done = status.value.filter(v => v === '已确认').length
  return total ? Math.round((done / total) * 100) : 0
})

function statusKey(i) { return status.value[i] === '已确认' ? 'done' : (status.value[i] === '不适用 N/A' ? 'na' : 'pend') }
function statusCls(i) { return status.value[i] === '已确认' ? 'sel-done' : (status.value[i] === '不适用 N/A' ? 'sel-na' : '') }

function gen() {
  showOut.value = true
  hint.value = `共 ${props.rows.length} 项，已完成 ${nDone.value} 项（完成率 ${pct.value}%）。可复制为 Markdown 或表格。`
}
function clear() {
  status.value = props.rows.map(() => '待确认')
  notes.value = props.rows.map(() => '')
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
  const head = ['| 合规核对项 | 加州要求 / 参考路径 | 供应商状态 | 备注/证据编号 |', '|---|---|---|---|']
  const body = props.rows.map((r, i) =>
    `| ${r.k} | ${r.ref} | ${status[i]} | ${notes[i] || '—'} |`)
  const sum = `（完成率 ${pct}%：${nDone} 已确认 / ${nPending} 待确认 / ${nNa} 不适用）`
  const title = (props.sectionLabel ? props.sectionLabel + '\n\n' : '') + sum + '\n\n'
  copy(title + [...head, ...body].join('\n'), '已复制为 Markdown 清单，可直接粘贴到文档/提交。')
}

function copyHtml() {
  copy(outTable.value.outerHTML, '已复制表格，可直接粘贴到 Word / Excel / 邮件。')
}
</script>

<style scoped>
.supplier-comp { font-family: "PingFang SC", "STHeiti", Arial, sans-serif; font-size: 13px; }
table.inputs { width: 100%; border-collapse: collapse; margin: 8px 0; }
table.inputs th, table.inputs td { border: 1px solid #ccc; padding: 6px 8px; vertical-align: middle; }
table.inputs th { background: #4a235a; color: #fff; }
table.inputs td.ref { background: #f6f2fa; color: #444466; }
table.inputs td.k { font-weight: 600; }
table.inputs select {
  width: 100%; box-sizing: border-box; border: 1px solid #bbccdd; border-radius: 4px; padding: 5px 7px; font-size: 13px;
}
table.inputs select.sel-done { background: #e6f7ee; color: #0a5; font-weight: 600; }
table.inputs select.sel-na { background: #f0f0f0; color: #888; }
table.inputs input {
  width: 100%; box-sizing: border-box; border: 1px solid #bbccdd; border-radius: 4px;
  padding: 5px 7px; font-size: 13px; background: #fff;
}
.bar { margin: 6px 0; display: flex; gap: 8px; flex-wrap: wrap; }
.bar button { border: none; padding: 8px 14px; border-radius: 5px; cursor: pointer; font-size: 13.5px; }
.bar .gen { background: #4a235a; color: #fff; }
.bar .clr { background: #eee; color: #333; }
.bar .export { background: #0e6b52; color: #fff; }
table.out { width: 100%; border-collapse: collapse; margin-top: 12px; }
table.out th, table.out td { border: 1px solid #999; padding: 6px 8px; vertical-align: top; }
table.out th { background: #ece2f5; }
.st-done { color: #00aa55; font-weight: 600; }
.st-na { color: #999; }
.st-pend { color: #c77; }
.sum { margin: 8px 0; padding: 8px 10px; background: #f3f7fb; border-radius: 5px; font-size: 13px; }
.note { color: #888; font-size: 12px; margin-top: 6px; }
.out-title { margin: 10px 0 4px; }
.clip-area { position: fixed; top: -9999px; left: -9999px; opacity: 0; height: 1px; width: 1px; }
</style>

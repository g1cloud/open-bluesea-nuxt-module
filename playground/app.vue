<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <!-- Header -->
    <header class="bg-white border border-gray-200 rounded-xl p-6 mb-8 max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-800">
        Open Bluesea Nuxt Module
      </h1>
      <p class="text-gray-500 text-sm mt-1">
        Component Playground
      </p>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Button Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-blue-500">smart_button</span>
            BSButton
          </h2>
          <div class="flex flex-col gap-3">
            <BSButton
              caption="Primary Button"
              button-color="blue"
              @click="handleClick"
            />
            <BSButton
              variant="secondary"
              caption="Secondary Button"
              button-color="orange"
              @click="handleClick"
            />
          </div>
        </div>

        <!-- Text Input Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-green-500">text_fields</span>
            BSTextInput
          </h2>
          <div class="flex flex-col gap-3">
            <BSTextInput
              v-model="textValue"
              name="textInput"
              placeholder="Enter text..."
            />
            <p class="text-sm text-gray-500">
              Value: <code class="font-mono text-gray-700">{{ textValue || "(empty)" }}</code>
            </p>
          </div>
        </div>

        <!-- Number Input Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-purple-500">pin</span>
            BSNumberInput
          </h2>
          <div class="flex flex-col gap-3">
            <BSNumberInput
              v-model="numberValue"
              placeholder="Enter number..."
            />
            <p class="text-sm text-gray-500">
              Value: <code class="font-mono text-gray-700">{{ numberValue ?? "(empty)" }}</code>
            </p>
          </div>
        </div>

        <!-- Checkbox Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-orange-500">check_box</span>
            BSCheckbox
          </h2>
          <div class="flex flex-col gap-3">
            <BSCheckbox v-model="checkboxValue">
              Enable feature
            </BSCheckbox>
            <BSCheckbox v-model="checkboxValue2">
              Another option
            </BSCheckbox>
            <p class="text-sm text-gray-500">
              Values: {{ checkboxValue }}, {{ checkboxValue2 }}
            </p>
          </div>
        </div>

        <!-- Radio Button Group Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-pink-500">radio_button_checked</span>
            BSRadioButtonGroup
          </h2>
          <div class="flex flex-col gap-3">
            <BSRadioButtonGroup
              v-model="radioValue"
              :items="radioItems"
              :value-provider="(item: RadioItem) => item.key"
              :label-provider="(item: RadioItem) => item.label"
            />
            <p class="text-sm text-gray-500">
              Selected: <code class="font-mono text-gray-700">{{ radioValue }}</code>
            </p>
          </div>
        </div>

        <!-- Select Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-cyan-500">arrow_drop_down_circle</span>
            BSSelect
          </h2>
          <div class="flex flex-col gap-3">
            <BSSelect
              v-model="selectValue"
              :items="selectItems"
              :value-provider="(item: SelectItem) => item.key"
              :label-provider="(item: SelectItem) => item.label"
              placeholder="Select an option..."
            />
            <p class="text-sm text-gray-500">
              Selected: <code class="font-mono text-gray-700">{{ selectValue || "(none)" }}</code>
            </p>
          </div>
        </div>

        <!-- Tooltip Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-yellow-500">info</span>
            v-tooltip
          </h2>
          <div class="flex flex-col gap-3">
            <span
              v-tooltip="{ content: 'This is a tooltip message!' }"
              class="inline-block px-4 py-2 bg-gray-100 rounded cursor-help"
            >
              Hover over me
            </span>
          </div>
        </div>

        <!-- Date Input Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-red-500">calendar_month</span>
            BSDateInput
          </h2>
          <div class="flex flex-col gap-3">
            <BSDateInput
              v-model="dateValue"
              placeholder="Select date..."
            />
            <p class="text-sm text-gray-500">
              Selected: <code class="font-mono text-gray-700">{{ dateValue || "(none)" }}</code>
            </p>
          </div>
        </div>

        <!-- TextArea Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-indigo-500">notes</span>
            BSTextArea
          </h2>
          <div class="flex flex-col gap-3">
            <BSTextArea
              v-model="textAreaValue"
              placeholder="Enter long text..."
              :rows="3"
            />
          </div>
        </div>

        <!-- Modal Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-8">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-teal-500">open_in_new</span>
            Modal
          </h2>
          <div class="flex flex-col gap-3">
            <BSButton
              caption="Open Alert Modal"
              button-color="teal"
              @click="openAlertModal"
            />
            <BSButton
              caption="Open Yes/No Modal"
              button-color="amber"
              @click="openYesNoModal"
            />
          </div>
        </div>
      </div>

      <!-- Grid Section -->
      <div class="mt-8 bg-white border border-gray-200 rounded-xl p-8">
        <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-blue-600">table_chart</span>
          BSGrid
        </h2>
        <BSGrid
          :data="gridData"
          :columns="gridColumns"
          :key-provider="(item: GridItem) => item.id"
          show-serial
        />
      </div>
    </main>

    <!-- Notification Container -->
    <BSNotificationContainer />

    <!-- Context Menu Container -->
    <BSContextMenuContainer />

    <!-- Modal Container -->
    <BSModalContainer />
  </div>
</template>

<script setup lang="ts">
const textValue = ref('')
const numberValue = ref<number>()
const checkboxValue = ref(false)
const checkboxValue2 = ref(true)
const radioValue = ref('option1')
const selectValue = ref('')
const dateValue = ref('')
const textAreaValue = ref('')

interface RadioItem {
  key: string
  label: string
}

interface SelectItem {
  key: string
  label: string
}

interface GridItem {
  id: string
  name: string
  email: string
  status: string
}

const radioItems: RadioItem[] = [
  { key: 'option1', label: 'Option 1' },
  { key: 'option2', label: 'Option 2' },
  { key: 'option3', label: 'Option 3' },
]

const selectItems: SelectItem[] = [
  { key: 'apple', label: 'Apple' },
  { key: 'banana', label: 'Banana' },
  { key: 'cherry', label: 'Cherry' },
  { key: 'grape', label: 'Grape' },
]

const gridData: GridItem[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', status: 'Active' },
]

const gridColumns = [
  { propertyId: 'name', caption: 'Name', width: 150 },
  { propertyId: 'email', caption: 'Email', width: 200 },
  { propertyId: 'status', caption: 'Status', width: 100 },
]

const modal = useModal()

const handleClick = () => {
  showNotification('Button clicked!', 'info')
}

const openAlertModal = () => {
  modal.openAlert('Alert', 'This is an alert message!')
}

const openYesNoModal = () => {
  modal.openYesNo(
    'Confirm',
    'Are you sure you want to proceed?',
    () => showNotification('You clicked Yes!', 'info'),
    () => showNotification('You clicked No!', 'info'),
  )
}
</script>

<style>
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-size: 20px;
}
</style>

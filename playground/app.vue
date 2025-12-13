<template>
  <div class="playground">
    <!-- Header -->
    <header class="header">
      <h1>Open Bluesea Nuxt Module</h1>
      <p>Component Playground</p>
    </header>

    <!-- Main Content -->
    <main class="main">
      <div class="grid">
        <!-- Button Card -->
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">smart_button</span>
            BSButton
          </h2>
          <div class="card-content">
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
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">text_fields</span>
            BSTextInput
          </h2>
          <div class="card-content">
            <BSTextInput v-model="textValue" placeholder="Enter text..." />
            <p class="value-display">
              Value: <code>{{ textValue || "(empty)" }}</code>
            </p>
          </div>
        </div>

        <!-- Number Input Card -->
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">pin</span>
            BSNumberInput
          </h2>
          <div class="card-content">
            <BSNumberInput
              v-model="numberValue"
              placeholder="Enter number..."
            />
            <p class="value-display">
              Value: <code>{{ numberValue ?? "(empty)" }}</code>
            </p>
          </div>
        </div>

        <!-- Checkbox Card -->
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">check_box</span>
            BSCheckbox
          </h2>
          <div class="card-content">
            <BSCheckbox v-model="checkboxValue"> Enable feature </BSCheckbox>
            <BSCheckbox v-model="checkboxValue2"> Another option </BSCheckbox>
            <p class="value-display">
              Values: {{ checkboxValue }}, {{ checkboxValue2 }}
            </p>
          </div>
        </div>

        <!-- Radio Button Card -->
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">radio_button_checked</span>
            BSRadioButton
          </h2>
          <div class="card-content">
            <BSRadioButton v-model="radioValue" value="option1">
              Option 1
            </BSRadioButton>
            <BSRadioButton v-model="radioValue" value="option2">
              Option 2
            </BSRadioButton>
            <BSRadioButton v-model="radioValue" value="option3">
              Option 3
            </BSRadioButton>
            <p class="value-display">
              Selected: <code>{{ radioValue }}</code>
            </p>
          </div>
        </div>

        <!-- Select Card -->
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">arrow_drop_down_circle</span>
            BSSelect
          </h2>
          <div class="card-content">
            <BSSelect
              v-model="selectValue"
              :items="selectItems"
              placeholder="Select an option..."
            />
            <p class="value-display">
              Selected: <code>{{ selectValue || "(none)" }}</code>
            </p>
          </div>
        </div>

        <!-- Tooltip Card -->
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">info</span>
            v-tooltip
          </h2>
          <div class="card-content">
            <span v-tooltip="'This is a tooltip message!'" class="tooltip-demo">
              Hover over me
            </span>
          </div>
        </div>

        <!-- Date Input Card -->
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">calendar_month</span>
            BSDateInputPopup
          </h2>
          <div class="card-content">
            <BSDateInputPopup
              v-model="dateValue"
              placeholder="Select date..."
            />
            <p class="value-display">
              Selected: <code>{{ dateValue || "(none)" }}</code>
            </p>
          </div>
        </div>

        <!-- TextArea Card -->
        <div class="card">
          <h2>
            <span class="material-symbols-outlined">notes</span>
            BSTextArea
          </h2>
          <div class="card-content">
            <BSTextArea
              v-model="textAreaValue"
              placeholder="Enter long text..."
              :rows="3"
            />
          </div>
        </div>
      </div>
    </main>

    <!-- Notification Container -->
    <BSNotificationContainer />
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

const selectItems = [
  { key: "apple", label: "Apple" },
  { key: "banana", label: "Banana" },
  { key: "cherry", label: "Cherry" },
  { key: "grape", label: "Grape" },
];

const handleClick = () => {
  showNotification("Button clicked!", "info");
};
</script>

<style>
.playground {
  min-height: 100vh;
  background: #f9fafb;
  padding: 2rem;
}

.header {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
}

.header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.header p {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0.25rem 0 0;
}

.main {
  max-width: 72rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 2rem;
}

.card h2 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.value-display {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.value-display code {
  font-family: ui-monospace, monospace;
  color: #374151;
}

.tooltip-demo {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border-radius: 0.25rem;
  cursor: help;
}

.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  font-size: 20px;
  color: #3b82f6;
}
</style>

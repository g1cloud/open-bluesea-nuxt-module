<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">
      Open Bluesea Nuxt Module Playground
    </h1>

    <!-- BSButton 컴포넌트 테스트 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">
        BSButton
      </h2>
      <BSButton @click="handleClick">
        Click me
      </BSButton>
    </section>

    <!-- BSTextInput 컴포넌트 테스트 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">
        BSTextInput
      </h2>
      <BSTextInput
        v-model="textValue"
        placeholder="Enter text..."
      />
      <p class="mt-2">
        Value: {{ textValue }}
      </p>
    </section>

    <!-- BSCheckbox 컴포넌트 테스트 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">
        BSCheckbox
      </h2>
      <BSCheckbox v-model="checkboxValue">
        Check me
      </BSCheckbox>
      <p class="mt-2">
        Checked: {{ checkboxValue }}
      </p>
    </section>

    <!-- Tooltip 디렉티브 테스트 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">
        v-tooltip directive
      </h2>
      <span v-tooltip="'This is a tooltip!'">Hover over me</span>
    </section>

    <!-- Notification 컨테이너 -->
    <BSNotificationContainer />
  </div>
</template>

<script setup lang="ts">
const textValue = ref('')
const checkboxValue = ref(false)

const handleClick = () => {
  showNotification('Button clicked!', 'info')
}
</script>

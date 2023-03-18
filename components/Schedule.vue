<template>
  <PageSection id="schedule">
    <template v-slot:header>航路・時刻</template>

    <div class="grid gap-4">
      <section>
        <h4
          class="bg-rose-500 py-2 px-4 text-base font-semibold leading-6 text-white"
        >
          青森発着（青蘭航路）
        </h4>
        <div class="py-4">2023年10月運行開始（津軽海峡フェリー）予定</div>
      </section>

      <section>
        <h4
          class="bg-lime-500 py-2 px-4 text-base font-semibold leading-6 text-white"
        >
          宮古・八戸発着（宮蘭航路）
        </h4>
        <div class="py-4">運行休止中</div>
      </section>
    </div>
  </PageSection>
</template>

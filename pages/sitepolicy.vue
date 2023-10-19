<template>
  <PageSection>
    <template v-slot:header>サイトポリシー</template>

    <div class="prose max-w-full">
      <section>
        <h4>個人情報取得・保護に関して</h4>
        <div>
          <p>
            当サイトへのトラフィックを分析およびパーソナライズした広告を掲載するために
            Cookie を使用しています。
            このサイトの利用に関する情報は、この目的に沿って Google
            と共有されます。
          </p>
          <p>
            このデータは匿名で収集されており、個人を特定するものではありません。
            この機能は
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              >Google アナリティクス オプトアウト アドオン</a
            >
            および
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              >広告設定</a
            >
            あるいはお使いのブラウザの設定から Cookie
            を無効にすることで収集を拒否することが出来ます。
          </p>
          <p>この規約に関しての詳細は以下のページをご覧ください。</p>
          <ul>
            <li>
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                >Google のサービスを使用するサイトやアプリから収集した情報の
                Google による使用</a
              >
            </li>
            <li>
              <a
                href="https://support.google.com/analytics/answer/6004245"
                target="_blank"
                rel="noopener noreferrer"
                >Google アナリティクス データの保護</a
              >
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h4>著作権について</h4>
        <div>
          <p>
            当サイトに掲載されている情報（文章、写真、イラスト、画像など）は、著作物です。
            著作権法上認められた場合を除き、無断で複製・転用することはできません。
          </p>
          <p>
            著作物に関するお問い合わせは各著作物の著作者等にお問い合わせください。
          </p>
        </div>
      </section>

      <section>
        <h4>サイトのリンクについて</h4>
        <div>
          <p>
            当サイトからリンクを設定している他のホームページについて、そこでの掲載内容は各サイト管理者の責任によるものであり、その内容について一切保証しません。
          </p>
        </div>
      </section>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
useHead({
  title: 'サイトポリシー',
});
</script>

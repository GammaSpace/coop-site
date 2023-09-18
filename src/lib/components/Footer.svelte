<script>
  import { phone, email, insta, twitter } from "$lib/svg/svg";
  const curDate = new Date().getFullYear();
</script>

<footer class="bottom-0 max-w-screen-xl mx-auto px-8 pt-6">
  <hr class="border-2 border-black mx-auto w-[95%]"/>
  <div
    class="max-w-screen-xl mx-auto pt-4 pb-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
  >
    <div class="flex justify-center md:order-2">
      <a href="tel:6476896005" class="flex">
        <span class="sr-only">Phone</span>
        {@html phone}
        <span class="ml-3 mr-6">(647) 689-6005</span>
      </a>
      <a
        href="mailto:info@gammaspace.ca"
        class="text-black hover:text-gray-500"
      >
        <span class="sr-only">Email</span>
        {@html email}
      </a>
      <a
        href="https://www.instagram.com/gammaspaceto/"
        class="ml-6 text-black hover:text-gray-500"
      >
        <span class="sr-only">Instagram</span>
        {@html insta}
      </a>
      <a
        href="https://twitter.com/gammaspaceto"
        class="ml-6 text-black hover:text-gray-500"
      >
        <span class="sr-only">Twitter</span>
        {@html twitter}
      </a>
    </div>
    <div class="mt-8 md:mt-0 md:order-1">
      <p class="text-center md:text-left md:pr-8 text-base leading-6 text-black">
        &copy; 2011-{curDate} Gamma Space
        Collaborative Studio, a registered non-profit N<sup class="sups">o.</sup> 839164-5
      </p>
    </div>
  </div>
</footer>
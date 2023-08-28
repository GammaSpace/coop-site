<script>
  //import Pricing from "../components/Pricing";
  import { wgLogo, gsLogo, burstLogo } from "$lib/svg/svg.js";
</script>

<div class="relative p-12">
  <div class="flex flex-wrap">
    <div class="md:w-3/4 lg:w-5/12">
      <div class="mb-12 max-w-full">
        {@html gsLogo}
      </div>
      <div class="intro content">
        <p>
          <b>
            Gamma Space, once a thriving events hub and coworking space for
            indie devs in Toronto's downtown West Queen West neighborhood,
            has transformed over the last year to a not-for-profit,
            distributed member co-op.
          </b>
          We are a group of game developers, artists, and creative
          technologists dedicated to exploring more community-led,
          collectively prosperous ways to care for, support and raise each
          other up.
        </p>

        <p>
          Since 2012, we’ve been making space for those who have been
          marginalized from tech spaces – now we’re working together to
          redefine equitable creative practices and shared value for our
          efforts.
        </p>

        <p>
          We’ll be sharing more information about how you can get involved
          soon.
        </p>
      </div>
      <a
        class="bg-black no-underline uppercase inline-block mt-6 text-lg text-white px-4 py-1 rounded-lg mr-2 mb-24"
        href="http://eepurl.com/dqLW3v"
        target="_blank"
      >
        Mailing List
      </a>
    </div>
  </div>
  <div class="flex flex-wrap">
    <div class="md:w-3/4 lg:w-5/12">
      <div class="content secondary" id="baby-ghosts">
        <h2>
          Current Projects
        </h2>
        <h3 class="mt-0">Peer Accelerator</h3>
        <div class="flex flex-wrap items-center my-6 justify-around">
          <div class=" mx-auto text-center flex justify-center">
            {@html wgLogo}
          </div>
          <div class="text-6xl  flex justify-center">
            ×
          </div>
          <div class=" mx-auto text-center flex justify-center">
            {@html burstLogo}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap">
    <div class="md:w-3/4 lg:w-5/12">
      <p>
        Baby Ghosts, a partnership between Weird Ghosts and Gamma Space, is
        a 4-month program aimed at supporting emerging
        <a href="https://weirdghosts.ca/faq" target="_blank"
          >underrepresented</a
        >
        founders and studios through the process of developing a demo,
        identifying and solving studio development pain points, and
        addressing the challenges of the “three Ps”: Product, Production,
        and Pitching.
      </p>

      <ul class="list-outside list-disc">
        <li>
          <b>Storytelling training:</b> Teams are supported in developing
          writing and presenting competencies for reporting (internal) and
          marketing (external).
        </li>
        <li>
          <b>Professional development:</b> Founders and teams are coached
          through studio development milestones.
        </li>
        <li>
          <b>Financial support:</b> Founders and/or studios receive an
          unrestricted grant of $20,000 from Weird Ghosts.
        </li>
        <li>
          <b>Community support:</b> Teams can tap into an engaged group of
          founders, developers and artists for peer mentorship and skill
          development.
        </li>
      </ul>
      <p>
        Coordinated by Gamma Space Hyades node: datejie cheko green, kaitlyn
        dougon, bryan depuy and Henry Faber
      </p>
      <p class="pt-4">
        And Weird Ghosts: Eileen Mary Holowka and Jennie Robinson Faber
      </p>

      <h3 class="pt-12">Community Publishing</h3>
      <p>
        We are working with a group of community members to develop a publishing program that will support the creation of games and interactive experiences by underrepresented creators.</p>
      <p>
        The program will provide funding, mentorship, and community support to creators who are not well-served by the current publishing landscape.
      </p>
    </div>
    <div class="lg:w-5/12 lg:pl-[8.5%]">
      <h3>About Weird Ghosts</h3>
      <p>
        Weird Ghosts is an impact fund aimed at supporting game studios led
        by underrepresented founders across Canada. We support studios with
        grants, catalytic investments, and community in order to build
        strong, impactful teams of underrepresented makers who are shaping
        the future of games.
      </p>
      <p>
        <a
          href="https://weirdghosts.ca"
          class="underline font-bold text-black"
          target="_blank"
          >Weird Ghosts Web Site</a
        >
      </p>
      
      <img src="/images/oc-logo.png" class="w-32 mt-12 mb-1" />
      <p>
        With support from Ontario Creates.
      </p>
    </div>
  </div>
</div>
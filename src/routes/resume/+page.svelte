<script lang="ts">
  import { Github, Handshake, Mail, PackageOpen } from "lucide-svelte";
  import avatar from "../../assets/avatar.jpg";
  import framework from "../../assets/resume/framework.png";
  import freshbooks from "../../assets/resume/freshbooks.png";
  import { Page } from "$lib";
  import shopify from "../../assets/resume/shopify.png";
  import vantage from "../../assets/resume/vantage.png";
</script>

<Page title="jon geiger's résumé" bg={import('../../assets/pom.webp')}>
  <div class="flex flex-col md:flex-row md:items-center gap-8 mb-6">
    <div class="flex items-center gap-4 flex-grow">
      <div class="avatar mr-2">
        <div class="w-10 h-10 rounded-lg">
          <img src={avatar} alt="my avatar, a close-up of a cute pomeranian" />
        </div>
      </div>

      <h1 class="text-5xl font-bold whitespace-nowrap">jon geiger</h1>
    </div>

    <div class="flex items-center gap-4">
      <a href="mailto:contact@geiger.to" class="btn btn-sm">
        <div>
          <Mail size="18" />
        </div>

        <span class="">jon@geiger.to</span>
      </a>

      <a href="https://github.com/geiger-to" class="btn btn-sm">
        <div>
          <Github size="18" />
        </div>

        <span class="">@geiger-to</span>
      </a>
    </div>
  </div>

  <hr class="my-4" />

  <div class="flex gap-4 mb-5">
    <div class="flex-1">
      <p class="md:text-xl">
        👋&nbsp; I'm a Toronto-based programmer, designer, and creative person
        with 15 years of experience building and nurturing production software.
      </p>
    </div>
  </div>

  <div
    class="print:hidden flex items-center alert gap-4 text-left alert-warning rounded-lg mb-4 text-info-content text-xs md:text-base"
  >
    <div class="flex-grow">
      I am <b>available</b> for work, full-time and contract.
      <span class="hidden md:inline"
        ><a href="/contact" class="link">Get in touch</a> if you'd like to work together.</span
      >
    </div>
    <a href="/contact" class="btn btn-xs md:btn-sm"> get in touch </a>
  </div>

  <hr class="print:hidden my-4" />

  <div class="flex md:flex-row flex-col gap-8 print:flex-col">
    <div class="flex-grow flex flex-col gap-4">
      <h2 class="text-[11px] font-bold uppercase opacity-75">
        highlighted experience
      </h2>
      <div>
        <div class="flex items-center gap-4 mb-2 text-sm md:text-base">
          <a class="font-bold" href="https://frame.work"
            >Freelance & open-source developer</a
          >
          <p class="flex-grow whitespace-nowrap"></p>
          <p class="opacity-75 italic whitespace-nowrap hidden md:inline">
            2024–Present
          </p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Took a career sabbatical to work on personal and open-source
            projects plus some part-time freelance work
          </li>
          <li>
            Developed <a
              href="https://github.com/masksrb/masks"
              class="underline">masks</a
            >—a full-featured, open-source, self-hostable auth framework for
            Ruby on Rails.
          </li>
          <li>
            Contributed to Shopify stores, Wordpress installations, and other
            basic applications for various clients.
          </li>
        </ul>
      </div>

      <div>
        <div class="flex items-center gap-4 mb-2 text-sm md:text-base">
          <div>
            <img
              src={framework}
              class="w-6 h-6 md:w-8 md:h-8 rounded"
              alt="Framework"
            />
          </div>
          <a class="font-bold" href="https://frame.work">Framework Computers</a>
          <p class="flex-grow whitespace-nowrap"></p>
          <p class="opacity-75 italic whitespace-nowrap hidden md:inline">
            2023
          </p>
        </div>

        <div class="flex gap-2 items-center">
          <p class="italic text-sm flex-grow">Full-stack developer</p>
          <p class="text-xs opacity-75">Jan – Jul</p>
        </div>
        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Developed features, performance improvements, and infrastructure
            changes in advance of high-traffic product launches
          </li>
          <li>
            Prototyped new e-commerce and content management platforms with a
            goal of speeding up development and reducing maintenance burden
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center gap-4 mb-2 text-sm md:text-base">
          <img
            src={shopify}
            class="w-6 h-6 md:w-8 md:h-8 rounded"
            alt="Shopify"
          />
          <a class="font-bold" href="https://shopify.com">Shopify</a>
          <p class="flex-grow whitespace-nowrap"></p>
          <p class="opacity-75 italic whitespace-nowrap hidden md:inline">
            2016–2022
          </p>
        </div>

        <div class="flex gap-2 items-center">
          <p class="italic text-sm flex-grow">Developer lead</p>
          <p class="text-xs opacity-75">2016–2018</p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Formed Shopify's Identity team and led a project to simplify and
            secure login, signup, and account management processes.
          </li>
          <li>
            Successfully migrated over 2 million accounts to a more secure
            single-sign-on system, along with major internal infrastructure.
          </li>
          <li>
            Led the development of the initial Identity service, tooling for
            integrating with it, and oversaw the complex migration experience,
            ensuring no major downtime or security incidents.
          </li>
        </ul>

        <div class="flex gap-2 items-center">
          <p class="text-sm flex-grow italic">Dev ATC manager</p>
          <p class="text-xs opacity-75">2017–2022</p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Dev ATC paired Shopify developers with a mentor and had them assist
            with incident management, keeping the CI/CD train running smoothly,
            and any other developer frustrations related to the largest codebase
            throughout the work day.
          </li>
          <li>
            I facilitated Dev ATC over 5 years—a program that hundreds of
            Shopify developers participated in. I personally mentored a good
            number of them.
          </li>
        </ul>

        <div class="flex gap-2 items-center">
          <p class="italic text-sm flex-grow">Developer manager</p>
          <p class="text-xs opacity-75">2018–2019</p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Formed another team named "Multi-channel Foundations" with a goal of
            improving and maintaining integrations with first- and third-party
            marketing/sales channels.
          </li>
          <li>
            Managed and coached the foundations team through several major
            projects—including a sync service that moved product and order data
            between Shopify and major channels. The service cut sync times from
            days to near real-time, removing a major source of customer and
            on-call frustration.
          </li>
          <li>
            Shipped Shopify's GDPR implementation for first and third-party
            applications. Onboarded 5 major partners to the API. Managed an
            on-call of ~15 developers.
          </li>
          <li>
            Took over management of several multi-channel teams, and coached
            them through a consolidation of several channel integrations,
            ultimately shipping a new product with significantly better reviews.
          </li>
        </ul>

        <div class="flex gap-2 items-center">
          <p class="italic text-sm flex-grow">Staff production engineer</p>
          <p class="text-xs opacity-75">2019–2022</p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Joined the CI/CD team, which owned Shopify's build and deploy
            infrastructure. I participated in the design and launch of a custom
            merge queue, automated deploy monitoring and rollbacks, Github/Slack
            integrations, self-hosted github runners, and more.
          </li>
          <li>
            Shipped several libraries and UX improvements for simplifying the
            deployment and monitoring process—took onboarding to CI/CD from a
            multi-step process down to just a few clicks.
          </li>
          <li>
            As primary on-call for anything related to Shopify CI/CD, I
            participated in many incidents which often required some form of
            intervention to roll out or fix problematic changes.
          </li>
        </ul>
      </div>

      <div>
        <div class="flex items-center gap-4 mb-2 text-sm md:text-base">
          <img
            src={vantage}
            class="w-6 h-6 md:w-8 md:h-8 rounded"
            alt="Vantage"
          />
          <a class="font-bold" href="https://gotvantage.com">Vantage</a>
          <p class="flex-grow whitespace-nowrap"></p>
          <p class="opacity-75 italic whitespace-nowrap hidden md:inline">
            2015–2016
          </p>
        </div>

        <div class="flex gap-2 items-center">
          <p class="text-sm flex-grow">Senior Frontend Developer</p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Led the design and development of new product features, directly
            contributing to the company's first $100k MRR milestone.
          </li>
          <li>
            Collaborated with customers to identify needs, designed solutions,
            and implemented nearly all frontend code, alongside key backend
            APIs.
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center gap-4 mb-2 text-sm md:text-base">
          <img
            src={freshbooks}
            class="w-6 h-6 md:w-8 md:h-8 rounded"
            alt="Freshbooks"
          />
          <a class="font-bold" href="https://freshbooks.com">Freshbooks</a>
          <p class="flex-grow whitespace-nowrap">Lead Developer</p>
          <p class="opacity-75 italic whitespace-nowrap hidden md:inline">
            2010–2015
          </p>
        </div>

        <div class="flex gap-2 items-center">
          <p class="italic text-sm flex-grow">Lead developer</p>
          <p class="text-xs opacity-75">2013–2015</p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Introduced an auth service for sharing session status across the
            frontend, paving the way for single-sign-on and new REST APIs for
            expensing, time tracking, and invoicing.
          </li>
          <li>
            Led a team that introduced Ember.js, rewrote large portions of the
            frontend to use it, and modernized the FreshBooks frontend.
          </li>
          <li>
            Ran tech talks and workshops on developing frontend with JS and
            Ember.js.
          </li>
        </ul>

        <div class="flex gap-2 items-center">
          <p class="italic text-sm flex-grow">Senior developer</p>
          <p class="text-xs opacity-75">2011–2013</p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Tech lead of a QA automation project that introduced Selenium to
            FreshBooks. Eventually used by the whole QA team to speed up
            easy-to-automate manual testing.
          </li>
          <li>
            Brought automated testing to large portions of the codebase by
            refactoring o modern Symfony components—introduced a templating
            language, HTTP router, request context, and abstractions for
            managing permissions.
          </li>
        </ul>

        <div class="flex gap-2 items-center">
          <p class="italic text-sm flex-grow">Intermediate developer</p>
          <p class="text-xs opacity-75">2010–2011</p>
        </div>

        <ul class="text-sm list-disc ml-4 my-2">
          <li>
            Developed product features and improvements including VAT support,
            updated expense tracking, importing/exporting features, and more.
          </li>
        </ul>
      </div>

      <h2 class="text-[11px] font-bold uppercase opacity-75 mt-4">
        other work
      </h2>

      <div>
        <div class="flex items-center gap-4 mb-2 text-sm">
          <div class="avatar">
            <div
              class="rounded-full border-2 border-neutral-content p-1 bg-base-200"
            >
              <Handshake size="16" />
            </div>
          </div>
          <span class="flex-grow font-bold">Freelance</span>
          <p class="opacity-75 italic whitespace-nowrap">2000–present</p>
        </div>

        <p class="text-xs">
          Freelanced since my early teens, designing and developing websites,
          content management systems, backend integrations, and e-commerce
          platforms. Have at various points held long-term contracts with local
          advertising and design agencies.
        </p>
      </div>

      <div>
        <div class="flex items-center gap-4 mb-2 text-sm">
          <div class="avatar">
            <div
              class="rounded-full border-2 border-neutral-content p-1 bg-base-200"
            >
              <PackageOpen size="16" />
            </div>
          </div>
          <span class="flex-grow font-bold">Open source</span>
          <p class="opacity-75 italic whitespace-nowrap">2008–present</p>
        </div>

        <p class="text-xs">
          Early on I developed an ORM and a few other libraries for a
          now-defunct PHP framework named Kohana. Nothing I've made since has
          been as popular, but I have contributed to open source efforts at most
          companies I've worked at.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col gap-3 md:ml-4 md:mr-2 md:flex-1 md:min-w-[222px]
      print:mx-0"
    >
      <div class="flex flex-col items-baseline gap-1">
        <span class="uppercase text-[11px] font-bold"> education </span>
        <p class="text-xs">Honours BFA, OCAD University, 2010</p>
      </div>

      <div class="flex flex-col items-baseline gap-1">
        <span class="uppercase text-[11px] font-bold"> languages </span>
        <p class="text-xs">Ruby, JS/TypeScript, Python, Go, PHP, and more...</p>
      </div>

      <div class="flex flex-col items-baseline gap-1">
        <span class="uppercase text-[11px] font-bold"> frameworks </span>
        <p class="text-xs">
          Rails, Django, Angular, React, Svelte, Tailwind, Ember, Sidekiq,
          Devise
        </p>
      </div>

      <div class="flex flex-col items-baseline gap-1">
        <span class="uppercase text-[11px] font-bold"> tech </span>
        <p class="text-xs">
          K8s, nginx, GCP, AWS, Cloudflare, git, vim+tmux,
          docker/podman+compose, ansible, (Postgre|My)SQL(ite), StatsD,
          elasticsearch, redis
        </p>
      </div>

      <div class="flex flex-col items-baseline gap-1">
        <span class="uppercase text-[11px] font-bold"> experience </span>
        <p class="text-xs">
          Full stack, OIDC/OAuth, CI/CD, dev tooling, e-commerce, accounting,
          privacy & security, incident response, distributed systems,
          self-hosting
        </p>
      </div>

      <div class="flex flex-col items-baseline gap-1">
        <span class="uppercase text-[11px] font-bold"> o/s contributions </span>
        <p class="text-xs">
          masksrb/masks, kohana-jelly, ember-responsive, shipit-engine, krane
        </p>
      </div>

      <div class="flex flex-col items-baseline gap-1">
        <span class="uppercase text-[11px] font-bold"> volunteering </span>
        <p class="text-xs">
          YSM teacher (coding with Scratch), Dog rescue with Mattie's place
        </p>
      </div>
    </div>
  </div>
</Page>

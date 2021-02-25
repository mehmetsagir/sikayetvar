<template>
  <footer class="wrapper">
    <div class="container">
      <div class="text">
        <h3>Thank you for supporting us!</h3>
        <h5>Let's get in touch on any of these platforms.</h5>
      </div>
      <ul class="social-media">
        <li>
          <a href="#" class="twitter">
            <icon name="twitter" />
          </a>
        </li>
        <li>
          <a href="#" class="facebook">
            <icon name="facebook" />
          </a>
        </li>
        <li>
          <a href="#" class="dribbble">
            <icon name="dribbble" />
          </a>
        </li>
        <li>
          <a href="#" class="github">
            <icon name="github" />
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <p>&copy; {{ new Date().getFullYear() }} <span>Şikayetvar</span></p>
      <router-link tag="a" to="/">Posts</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  height: 200px;
  padding-top: 20px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      h3 {
        font-size: 24px;
        font-weight: 400;
        line-height: 33px;
        color: #00cdac;
      }
      h5 {
        font-size: 22px;
        font-weight: 300;
        line-height: 30px;
        color: #32325d;
        margin-top: 5px;
      }
    }
    .social-media {
      display: flex;
      li {
        &:not(:last-child) {
          margin-right: 10px;
        }
        a {
          padding: 8px 12px;
          border-radius: 5px;
          position: relative;
          &:hover::before,
          &:hover::after {
            display: block;
          }
          &::before {
            content: "Follow us";
            position: absolute;
            top: -35px;
            left: -80%;
            width: 80px;
            padding: 4px 6px;
            border-radius: 4px;
            background: #212529;
            color: #fff;
            font-size: 14px;
            text-align: center;
            display: none;
          }
          &::after {
            content: "";
            top: -9px;
            left: 30%;
            background: #212529;
            width: 15px;
            height: 8px;
            position: absolute;
            clip-path: polygon(50% 100%, 0 0, 100% 0);
            display: none;
          }

          &.twitter {
            background: #1da1f2;
          }
          &.facebook {
            background: #3b5999;
          }
          &.dribbble {
            background: #ea4c89;
          }
          &.github {
            background: #222222;
          }
        }
      }
    }
  }
  .copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    margin-top: 40px;
    border-top: 1px solid #ccc;
    padding: 0 10px;
    p {
      font-weight: 700;
      span {
        color: #00cdac;
      }
    }
    a {
      color: #8898aa;
      font-weight: 700;
      font-size: 14px;
    }
  }
}

@media (max-width: 650px) {
  footer .container {
    flex-direction: column;
    .text {
      text-align: center;
    }
    .social-media {
      margin-top: 50px;
    }
  }
}
</style>

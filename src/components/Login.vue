<template >
  <main class="form-signin w-25 m-auto">
            <form>
                <!-- <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
                <h1 class="h3 mb-3 fw-normal">Login</h1>
                <Input :label="'Email address'" :type="'email'"/>
                <Input :label="'Password'" :type="'password'"/>

                <!-- <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div> -->
                <Button type="submit">Login</Button>
                <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </main>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>
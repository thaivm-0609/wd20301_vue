<template>
    <div class="container-fluid">
        <div class="row">
            <!-- SIDEBAR -->
            <aside class="sidebar col-4 p-3">
                <h5 class="text-center">Sidebar</h5>
                <ul>
                    <li>
                        <router-link to="/admin/list" class="btn btn-success">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/admin/create" class="btn btn-warning">Create</router-link>
                    </li>
                </ul>
            </aside>

            <!-- MAIN AREA -->
            <div class="col-8 p-0 d-flex flex-column">
                <!-- CONTENT -->
                <main class="content-wrapper flex-grow-1">
                    <div class="content-box">
                        <router-view></router-view>
                    </div>
                </main>

                <!-- FOOTER -->
                <footer class="footer d-flex justify-content-center align-items-center">
                    footer
                </footer>
            </div>
        </div>
    </div>
</template>

<style>
body {
    background: #fff;
    color: #fff;
}
.sidebar {
    width: 250px;
    min-height: 100vh;
    background: #1b1b1b;
}
.content-wrapper {
    padding: 20px;
    background: #0f0f0f;
    min-height: calc(100vh - 60px);
}
.footer {
    height: 60px;
    background: #1b1b1b;
}
.content-box {
    border: 1px solid #666;
    padding: 20px;
    height: 100%;
}
</style>
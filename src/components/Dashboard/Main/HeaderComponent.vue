<template>
  <div class="page-heading">
    <div class="page-title">
      <div class="row">
        <div class="col-12 col-md-6 order-md-1 order-last">
          <h4>
            {{
              'Sales Tracking ' +
              new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
            }}
          </h4>
          <p class="text-subtitle text-muted">
            Displaying various information and achievements from each sales representative.
          </p>
        </div>
        <div class="col-12 col-md-6 order-md-2 order-first">
          <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">Main Page</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

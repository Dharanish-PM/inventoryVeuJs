@Library('jenkins-ci-automation@master') _

BlibliPipeline ([
  type : 'vue',
  nodejs_version: '20',
  application : [
    tribe : "Training",
    squad : "Training",
    service_name : "inventoryUi"
  ],
  sonar: [
    serverId : 'sonar9-gcp'
  ],
  test: [
    integration: [
      playwright: [
        enabled: true,
        version: '1.17.1' // MUST be the same as PINNED playwright image in package.json
      ]
    ]
  ]
])
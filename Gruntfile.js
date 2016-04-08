module.exports = function(grunt){

	grunt.initConfig({
	   'create-windows-installer': {
		  x64: {
		    appDirectory: '../NewTropensChat-Package/NewTropensChat-win32-x64',
		    outputDirectory: '../NewTropensChat-Package/GruntNewTropensChat-win32-x64',
		    authors: 'NewTropens',
		    exe: 'NewTropensChat.exe',
		    remoteReleases : 'https://github.com/MrDJthib/NewTropens-Chat.git'
		  }
		}
  	});

	grunt.loadNpmTasks('grunt-electron-installer');
}
# Azure Resume Challenge
Resume that is hosted in Azure following Cloud Guru Azure Resume Challenge | Used a template for front-end portions of the website: The CSS / HTML portions | 

## Beginning the Challenge | Front End HTML / CSS

- Created a beginning front end folder that contains the website in HTML.
- main.js contains visitor counter code.
---

```js
            <img class="profile-pic"  src="images/Axolotl.png" alt="" />
```
- HTML to contain image

---
```js
        <p>There has been <a id="counter"></a> views on this website so far :) </p> 
```
- Implementing the counter
---

# Created an Azure Cosmos DB to deploy everything


- Created a Database inside of Azure Cosmos, alongside with a container to store counter data.

--- 
```
"id": "1",
"count": 0
```
-  Implementing the id for the document (1) because its the starter, alongside with the counter data which I put to 0 as nobody has visisted the website yet
---
- At this step I ran into three seperate issues: One where func host start was not working, alongside changing where the functions tab was located in the guide. 

- In azure VS code workspace there is a functions icon where you can create a new project from there instead of how the video shown 
---
```
cd backend
cd api
func host start
```
- it ended up not working. The reason being is because i had to install  https://github.com/Azure/azure-functions-core-tools#installing
---

---
![Alt text](image-1.png)
- I ended up failing the build for my program with this error code.
```
error CS8805: Program using top-level statements must be an executable.  error CS1061: 'HostBuilder' does not contain a definition for 'ConfigureFunctionsWorkerDefaults' and no accessible extension method 'ConfigureFunctionsWorkerDefaults' accepting a first argument of type 'HostBuilder' could be found (are you missing a using directive or an assembly reference?) 0 Warning(s) 2 Error(s)
```
- I ended up pasting this into my browser to find https://stackoverflow.com/questions/75626036/program-using-top-level-statements-must-be-an-executable

- I enabled using lower versions of SDK as well to see if it would work

   ![Alt text](image-2.png)
- After reading through the error code and realizing that there was an unknown file named program.cs. I deleted the file, and reran func host start and it ended up working.
   ![Alt text](image-3.png)
   ![Alt text](image-4.png)
---
- It said to install the NuGet Package off the website to work with cosmosDB, and lookign at the new kb it looks like it isn't there anymore instead I just pasted the add package directly
-In Local Settings JSON I added a key to make sure there is connectivity to VS

---
-Went through the Azure functions section with no particular errors Swapped Encoding.UTF8 to System.Text.Encoding.UTF8 to ensure compatibility

---
- Faced one problem where I could not find project root
![Alt text](image-5.png)

- Lots of problems facing around the Azure functions integration with this video as it is three years old, spent around 3 hours trying to find a solution to the page counter problem. However, it looks like it just is EOL.
- Going to try to find some more solutions / create a website via a different way
---
-Pictures of current end result:
![image](https://github.com/Trieuloo/azure-resume/assets/132096069/2f68e1d6-ba8e-49ff-bece-e48a8812a4d7)
![image](https://github.com/Trieuloo/azure-resume/assets/132096069/ab1abe41-7003-4264-a297-68edfade81c3)
![image](https://github.com/Trieuloo/azure-resume/assets/132096069/2d63bac1-8304-423b-ac07-7c492be0c5bd)
![image](https://github.com/Trieuloo/azure-resume/assets/132096069/a3fd70d9-baec-4b94-8387-257993ec0f9a)





  
  

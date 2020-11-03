# Custom Component for Notifications &lt;cc-notification-bell/&gt;
A custom component which serves the purpose of displaying a UI control, displayed as bell. The bell has a notification count balloon, displaying the number of active notifications

<h2>The View</h2>
<h3><u>How easy is it to use?</u></h3>
      &lt;cc-notification-bell id="notfctnComp" 
        notfctn-obj="[[notificationObj]]" 
        on-clear-notifications="[[clearAllNotfctns]]" 
        on-clear-single-notification="[[clearSingleNotification]]"&gt;
      &lt;/cc-notification-bell&gt;

<h3>Attributes and their use</h3>
      <ul>
      <li><h4>on-clear-notifications</h4>
      This is an event which is raised/dispatched from the Custom Component. 
      This event, as the name itself says, clears or deletes all notifications in the list
      This event will be caught and handled by suitable method in the View Model</li>
      <li> <h4>notfctn-obj</h4>
      This holds the information that will be passed to the custom component. </li>
      <li><h4>on-clear-single-notification</h4>
      This is an event which is raised/dispatched from the Custom Component. 
      This event, as the name itself says, clears or deletes the selected notification in the list
      This event will be caught and handled by suitable method in the View Model</li>
      </ul>
      
         
<h2>The View Model: Preparing the data & logic, for the above attributes</h2>
     
  <p>Rather than going through the code, line-by-line, let us understand the logic</p>
  <p>Signals play a very important role. They enable a two-way communication between the 2 parties here. The parties being the custom component and the parent page, where this custom component is placed upon</p>
  <p> The Custom Component, referred as CC going ahead, is a UI control, which provides both, the Data Display and Behavior.</p>
  <p>Data Display includes, displaying the notifications. This includes two things. One, show the total count of notifications and showing the notifications in a list</p>
          
